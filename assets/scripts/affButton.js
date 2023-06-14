let tracker = location.search.replace('?','')
console.log(tracker)
const affiliateButton = document.querySelectorAll('.affiliateButton')
affiliateButton.forEach(button => {
    button.href = `https://apps.apple.com/app/apple-store/id6443764461?pt=125642528&ct=${tracker}`
})