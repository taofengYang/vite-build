(function() {
    function report() {
        const reportDiv = document.createElement('div') as HTMLDivElement
        const report_values = {
            reason: '',
            addition: '',
            phoneNumber: ''
          }
        const switchSubmit = (state: number) => {
            if (state == 1) {
                submit_btn.style.color = '#333333'
                submit_btn.style.cursor = 'pointer'
                submit_btn.onclick = () => undefined
            } else if (state == 0) {
                submit_btn.style.color = '#B8B8B8'
                submit_btn.style.cursor = 'auto'
                submit_btn.onclick = null
            }
            }
            let submit_btn = reportDiv.querySelector('.report-submit')! as HTMLDivElement
          const valuesProxy = new Proxy(report_values, {
            set(target, property, value, receiver) {
              target[property] = value
              if (
                report_values.reason !== '' &&
                report_values.addition !== '' &&
                report_values.phoneNumber !== ''
              ) {
                switchSubmit(1)
              } else {
                switchSubmit(0)
              }
              return true
            }
          })
    }
    window.r = report
})()