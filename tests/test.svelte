<script>
    let tests = [
        /*html*/`<div>OK</div>`,
        /* INLINE-HTML */ `<div>Test</div>$`,
        /*css*/`
        .className {
            color: red;
        }
        `,
        // html 
        `
        <div>Test</div>
        `,
        /* html */ 
        `
        <div>Test</div>
        `,
        /*sql*/
        `
        SELECT * FROM test
        WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
        ORDER BY ProductName;
        `,
        /*XML*/
        `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>http://www.example.com/</loc>
        </url>
        </urlset> 
        `
    ]
</script>