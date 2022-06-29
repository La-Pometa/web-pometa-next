const redirects = [


    { from: '/disseny-pagines-web-responsive', to: '/ca/web-ecommerce' },
    { from: '/disseny-pagines-web-responsive/', to: '/ca/web-ecommerce' },

    { from: '/disseny-pagines-web-lleida/', to: '/ca/web-ecommerce-lleida' },
    { from: '/disseny-pagines-web-lleida', to: '/ca/web-ecommerce-lleida' },

    { from: '/redes-sociales-community-manager', to: '/anuncios-social-media' },
    { from: '/redes-sociales-community-manager/', to: '/anuncios-social-media' },

    { from: '/ca/agencia-publicitat-terrassa', to: '/ca/publicitat-social-media-a-barcelona' },
    { from: '/ca/agencia-publicitat-terrassa/', to: '/ca/publicitat-social-media-a-barcelona' },


    { from: '/ca/proyecto', to: '/ca/projectes' },
    { from: '/ca/proyecto/', to: '/ca/projectes' },


    { from: '/es/argal', to: '/es/argal-internacional' },
    { from: '/es/argal/', to: '/es/argal-internacional' },
    { from: '/argal', to: '/argal-internacional' },
    { from: '/argal/', to: '/argal-internacional' },

    { from: '/tendencias-digitales-2021', to: '/tendencias-digitales-en-el-2021' },
    { from: '/tendencias-digitales-2021/', to: '/tendencias-digitales-en-el-2021' },



]
module.exports = function(req, res, next) {
    const url = req.url.split('?')[0];
    const urlParams = null;
    let newLocation;

    const redirect = redirects.find(r => r.from === url)
    if (redirect) {
        if (urlParams) {
            newLocation = redirect.to + urlParams;
        } else {
            newLocation = redirect.to;
        }
        res.writeHead(301, {
            Location: newLocation
        });
        res.end()
    } else {
        next()
    }
}