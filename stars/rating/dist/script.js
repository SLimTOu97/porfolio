document.querySelectorAll('.rating').forEach(rating => {

    let entries = rating.querySelectorAll('li')

    entries.forEach(function(entry, index) {

        entry.addEventListener('click', e => {

            let active = [...entries].filter((e, i) => i >= index && !e.classList.contains('active')),
                inactive = [...entries].filter((e, i) => i < index && e.classList.contains('active'))

            if(active.length) {
                gsap.to(active.reverse(), {
                    onStart() {
                        this._targets.forEach(e => e.classList.add('active', 'activeColor'))
                    },
                    keyframes: [{
                        '--star-scale': 0,
                        '--star-y': 0,
                        duration: 0
                    }, {
                        '--star-scale': 1,
                        '--dot-scale': 0,
                        duration: .9,
                        ease: 'elastic.out(1, .7)',
                        stagger: .03
                    }]
                })
            }

            if(inactive.length) {
                gsap.to(inactive, {
                    onStart() {
                        this._targets.forEach(e => e.classList.remove('activeColor'))
                    },
                    onComplete() {
                        this._targets.forEach(e => e.classList.remove('active'))
                    },
                    '--star-before-r': -20,
                    '--star-before-y': -8,
                    '--star-after-r': 20,
                    '--star-after-y': 8,
                    duration: .65,
                    clearProps: true
                })
                gsap.to(inactive, {
                    '--star-o': 0,
                    '--star-blur': 10,
                    '--star-y': 48,
                    '--dot-scale': .8,
                    duration: .5,
                    delay: .15,
                    clearProps: true
                })
            }

        })

    })

})