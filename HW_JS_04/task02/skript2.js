var Countdown = {
    // Backbone-like structure
    time: document.querySelector('.countdown'),

    // Params
    countdown_interval: null,
    timeEnd: new Date('1/1/2025'),

    init: function() {
        // DOM
        this.timeD = {
            days: this.time.querySelector('.figure-day'),
            hours: this.time.querySelector('.figure-hrs'),
            minutes: this.time.querySelector('.figure-min'),
            seconds: this.time.querySelector('.figure-sec')
        }

        this.count()
    },

    count: function() {
        var that = this

        this.countdown_interval = setInterval(function() {
            let today = new Date()
            let diff = Math.floor((that.timeEnd - today) / 1000)

            let secLeft = diff % 60
            diff = Math.floor(diff / 60)
            let minLeft = diff % 60
            diff = Math.floor(diff / 60)
            let hourLeft = diff % 24
            let daysLeft = Math.floor(diff / 24)

            // Update DOM values
            that.updateFigure(that.timeD.days, daysLeft, 3)
            that.updateFigure(that.timeD.hours, hourLeft, 2)
            that.updateFigure(that.timeD.minutes, minLeft, 2)
            that.updateFigure(that.timeD.seconds, secLeft, 2)

            if (that.timeEnd <= today) {
                clearInterval(that.countdown_interval)
            }
        }, 1000)
    },

    updateFigure: function(timeD, value, digits) {
        if (!timeD) return

        let valStr = value.toString().padStart(digits, '0')
        for (let i = 0; i < digits; i++) {
            let fig = timeD.querySelector(`.figure:nth-child(${i + 1}) .top`)
            if (fig && fig.innerHTML !== valStr[i]) {
                this.animateFigure(timeD.querySelector(`.figure:nth-child(${i + 1})`), valStr[i])
            }
        }
    },

    animateFigure: function(time, value) {
        var top = time.querySelector('.top'),
            bottom = time.querySelector('.bottom'),
            back_top = time.querySelector('.top-back'),
            back_bottom = time.querySelector('.bottom-back')

        if (!top || !bottom || !back_top || !back_bottom) return

        back_top.querySelector('span').innerHTML = value
        back_bottom.querySelector('span').innerHTML = value

        gsap.to(top, {
            duration: 0.8,
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: 'quart.out',
            onComplete: function() {
                top.innerHTML = value;
                bottom.innerHTML = value;
                gsap.set(top, { rotationX: 0 })
            }
        })

        gsap.to(back_top, {
            duration: 0.8,
            rotationX: 0,
            transformPerspective: 300,
            ease: 'quart.out',
            clearProps: 'all'
        })
    }
}

Countdown.init()