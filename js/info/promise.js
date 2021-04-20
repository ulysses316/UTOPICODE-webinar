let datos = [
    {
        comunidad: "UTOPICODE",
        eventos: "2 por semana",
        url: "https://www.utopicode.io"
    },
    {
        comunidad: "GDG UNAM",
        eventos: "1 vez al mes",
        url: "https://gdg.community.dev/gdg-unam/"
    }
]

// const getDatos = () =>{
//     setTimeout(() => {
//         return datos;
//     }, 1500)
// }

// console.log(getDatos());

const getDatos = () =>{
    return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(datos);
            }, 1500)
        })
    }
    
getDatos()
    .then((datos)=>{
        console.log(datos);
    })
