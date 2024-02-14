const isViewTranstionsSupported = () => {
    return Boolean(document.startViewTransition)
}

const fetchPage = async (url) => {
    const response = await fetch(url)
    const text = await response.text()
    const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)

    return data
}


const useViewTransitions = () => {
    if(!isViewTranstionsSupported()) return 

    window.navigation.addEventListener('navigate', (event) => {
        const toUrl = new URL(event.destination.url)

        if(location.origin !== toUrl.origin) return 

        event.intercept({
            async handler() {
                const data = await fetchPage(toUrl.pathname)
                document.startViewTransition(()=>{
                    document.getElementById('root').innerHTML = data
                    document.documentElement.scroll = 0
                })
                console.log(data);
            }
        })

    })
}

export default useViewTransitions