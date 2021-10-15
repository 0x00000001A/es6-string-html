<template>
  
</template>

<script>
export default {
    test: /*html*/`<div>OK</div>`,
    test2() {
        let variable = /* INLINE-HTML */ `<div>Test</div>${Window}`
        
        variable = /*css*/`
        .className {
            color: red;
        }
        `
        variable = /* html */ `<div>Test</div>${window}`

        variable = // html 
        `
        <div>Test</div>${Window}
        `

        variable = /* html */ 
        `
        <div>Test</div>${Window}
        `

        const fn = (param) => param;
        const html = (param) => html`<div>Something</div>`
        fn(//html
        `<div>Something</div>${window}`
        )
        fn(html`<div>OK</div>`)
        variable = /*sql*/
        `
        SELECT * FROM ${table}\`_postfix\`
        WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
        ORDER BY ProductName;
        `

        variable = /*XML*/
        `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>http://www.example.com/</loc>
        </url>
        </urlset> 
        `
    },
    test: 'asdas'
}
</script>

<style>

</style>