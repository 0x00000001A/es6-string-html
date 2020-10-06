<template>
  
</template>

<script>
export default {
    test: /*html*/`<div>OK</div>`,
    test2() {
        let variable = /*html*/ `<div>Test</div>${Window}`

        variable = /*html*/`<div>Test</div>${window}`

        variable = //html
        `
        <div>Test</div>${Window}
        `

        variable = /*html*/
        `
        <div>Test</div>${Window}
        `

        const fn = (param) => param;
        const html = (param) => html`<div>Something</div>`
        fn(//html
        `<div>Something</div>${window}`
        )
        fn(html`<div>OK</div>`)
    },
    test: 'asdas'
}
</script>

<style>

</style>