export default defineEventHandler(async (event)=>{
    // when using private key we use $fetch
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=9G6afejAcKlaMHMe4WmBrv9xMjFIgTG1N9vfPNd6')
    return data
})