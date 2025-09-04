

//Links redes sociales
const whatsappNumber = '526624308330';
const whatsappMessage = 'Hola, me gustaría obtener más información';

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const facebookLink = `https://www.facebook.com/precsoblock/`;
const instagramLink = `https://www.instagram.com/precsoblock/`;

// Sucursales

const branches = [
    {
        id: 'precsoblock',
        name: 'Lázaro Cárdenas',
        address: 'Bulevar Lázaro Cárdenas 750, Progresista, 83120 Hermosillo, Son.',
        limkMap: 'https://maps.app.goo.gl/wWJUBnXmpyHkkoEq9',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55765.30118895912!2d-111.0403639948993!3d29.12541638017589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce86ca5daa5b61%3A0x63f5e711a8a3d839!2sPrecsoblock!5e0!3m2!1ses-419!2smx!4v1756324884707!5m2!1ses-419!2smx'
    },
    {
        id: 'blockmart',
        name: 'Quiroga',
        address: 'Blvd. Antonio Quiroga 360, Villa Bonita Residencial, 83288 Hermosillo, Son.',
        limkMap: 'https://maps.app.goo.gl/pL1z6Y3mP78X95p19',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55801.269485885816!2d-111.09798789024354!3d29.05902074184086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce813c93402819%3A0xbf460784991bc9aa!2sPrecsoblock!5e0!3m2!1ses-419!2smx!4v1756342060468!5m2!1ses-419!2smx'
    },
    {
        id: 'desierto',
        name: 'Parque Industrial',
        address: 'A Sahuaripa, Parque Industrial, 83299 Hermosillo, Son.',
        limkMap: 'https://maps.app.goo.gl/RDBhQXXaGypYnF8e9',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66360.89799907179!2d-111.02073981488503!3d29.05648581223425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85312fc4befb%3A0x60f2e6c2d6b6cd76!2sPrecsoblock!5e0!3m2!1ses-419!2smx!4v1756342134865!5m2!1ses-419!2smx'
    },
    {
        id: 'nogales',
        name: 'Nogales',
        address: 'De Los Nogales km 16, 84000 Heroica Nogales, Son.',
        limkMap: 'https://maps.app.goo.gl/v8nt43XWkSzy58959',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13651.270992873919!2d-110.99281054607471!3d31.19806630150651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d1514c7dc16291%3A0xfc0e7b19d71a05e8!2sPrecsoblock%20NOGALES!5e0!3m2!1ses-419!2smx!4v1756341625421!5m2!1ses-419!2smx'
    },
    {
        id: 'guaymas',
        name: 'Guaymas',
        address: 'Carr. Internacional, Petrolera, 85456 Guaymas, Son.',
        limkMap: 'https://maps.app.goo.gl/LLMEtQRnFp9nhDCi7',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.0398301393875!2d-110.92827432465663!3d27.931424176054954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c97b1cd741f7b9%3A0x4ac7c30569f08009!2sPrecsoblock%20Guaymas!5e0!3m2!1ses-419!2smx!4v1756341711017!5m2!1ses-419!2smx'
    }
];

export default {
    whatsappLink,
    facebookLink,
    instagramLink,
    branches,
}