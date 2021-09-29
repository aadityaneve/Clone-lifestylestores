

let displayProductDiv = document.getElementById('displayProductDiv');

let womenTopWear = [
    {
        brand: "BOSSINI",
        category: "T-shirt",
        price: "349",
        discount: "50",
        fitting: "Slim Fit",
        color: ['gray', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008665988-White-White-1000008665988_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008665988-White-White-1000008665988_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008665988-White-White-1000008665988_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008665988-White-White-1000008665988_04-2100.jpg']
    },
    {
        brand: "FAME FOREVER",
        category: "T-shirt",
        price: "449",
        discount: "50",
        fitting: "Slim Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008654609-White-White-1000008654609_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008654609-White-White-1000008654609_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008654609-White-White-1000008654609_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008654609-White-White-1000008654609_04-2100.jpg']
    },
    {
        brand: "GINGER",
        category: "Top",
        price: "449",
        discount: "50",
        fitting: "Slim Fit",
        color: ['yellow', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009726693-Yellow-Mustard-1000009726693_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009726693-Yellow-Mustard-1000009726693_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009726693-Yellow-Mustard-1000009726693_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009726693-Yellow-Mustard-1000009726693_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009726693-Yellow-Mustard-1000009726693_05-2100.jpg']
    },
    {
        brand: "LATIN QUARTERS",
        category: "T-shirt",
        price: "749",
        discount: "50",
        fitting: "Regular Fit",
        color: ['pink', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009865322-Pink-Pink-1000009865322_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009865322-Pink-Pink-1000009865322_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009865322-Pink-Pink-1000009865322_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009865322-Pink-Pink-1000009865322_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009865322-Pink-Pink-1000009865322_05-2100.jpg']
    },
    {
        brand: "GINGER",
        category: "Shirt",
        price: "749",
        discount: "50",
        fitting: "Slim Fit",
        color: ['Black', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009718546-Black-Black-1000009718546_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009718546-Black-Black-1000009718546_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009718546-Black-Black-1000009718546_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009718546-Black-Black-1000009718546_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009718546-Black-Black-1000009718546_05-2100.jpg']
    },
    {
        brand: "GINGER",
        category: "Top",
        price: "749",
        discount: "50",
        fitting: "Slim Fit",
        color: ['Black', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557505-Black-Black-1000009557505_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557505-Black-Black-1000009557505_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557505-Black-Black-1000009557505_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557505-Black-Black-1000009557505_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557505-Black-Black-1000009557505_05-2100.jpg']
    },
    {
        brand: "GINGER",
        category: "Top",
        price: "649",
        discount: "50",
        fitting: "Slim Fit",
        color: ['yellow', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557527-Yellow-Mustard-1000009557527_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557527-Yellow-Mustard-1000009557527_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557527-Yellow-Mustard-1000009557527_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009557527-Yellow-Mustard-1000009557527_04-2100.jpg']
    },
    {
        brand: "BOSSINI",
        category: "Top",
        price: "649",
        discount: "50",
        fitting: "Slim Fit",
        color: ['red', 'black', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_05-2100.jpg']
    },
    {
        brand: "BOSSINI",
        category: "Top",
        price: "649",
        discount: "50",
        fitting: "Slim Fit",
        color: ['red', 'black', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009199619-Red-Wine-1000009199619_05-2100.jpg']
    }
];

let womenEthnicWear = [
    {
        brand: "MELANGE",
        category: "Kurta",
        price: "899",
        discount: "40",
        fitting: "Straight Fit",
        color: ['blue', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009665966-Blue-Navy-1000009665966_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009665966-Blue-Navy-1000009665966_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009665966-Blue-Navy-1000009665966_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009665966-Blue-Navy-1000009665966_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009665966-Blue-Navy-1000009665966_05-2100.jpg']
    },
    {
        brand: "MELANGE",
        category: "Kurta",
        price: "1,019",
        discount: "40",
        fitting: "Straight Fit",
        color: ['red', 'black', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666068-Red-Maroon-1000009666068_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666068-Red-Maroon-1000009666068_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666068-Red-Maroon-1000009666068_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666068-Red-Maroon-1000009666068_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666068-Red-Maroon-1000009666068_05-2100.jpg']
    },
    {
        brand: "COLOUR ME",
        category: "Tunic",
        price: "779",
        discount: "40",
        fitting: "Slim Fit",
        color: ['yellow', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008766071-Yellow-Mustard-1000008766071_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008766071-Yellow-Mustard-1000008766071_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008766071-Yellow-Mustard-1000008766071_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008766071-Yellow-Mustard-1000008766071_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008766071-Yellow-Mustard-1000008766071_05-2100.jpg']
    },
    {
        brand: "MELANGE",
        category: "Kurta",
        price: "1019",
        discount: "40",
        fitting: "Regular Fit",
        color: ['blue', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666360-Blue-Indigo-1000009666360_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666360-Blue-Indigo-1000009666360_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666360-Blue-Indigo-1000009666360_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666360-Blue-Indigo-1000009666360_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009666360-Blue-Indigo-1000009666360_05-2100.jpg']
    },
    {
        brand: "MELANGE",
        category: "Kurta",
        price: "1379",
        discount: "40",
        fitting: "Slim Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009510721-White-OffWhite-1000009510721_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009510721-White-OffWhite-1000009510721_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009510721-White-OffWhite-1000009510721_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009510721-White-OffWhite-1000009510721_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009510721-White-OffWhite-1000009510721_06-2100.jpg',]
    },
    {
        brand: "MELANGE",
        category: "Kurta",
        price: "999",
        discount: "",
        fitting: "Slim Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010024215-White-OffWhite-1000010024215_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010024215-White-OffWhite-1000010024215_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010024215-White-OffWhite-1000010024215_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010024215-White-OffWhite-1000010024215_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010024215-White-OffWhite-1000010024215_05-2100.jpg']
    },
    {
        brand: "MELANGE",
        category: "Kurta",
        price: "909",
        discount: "30",
        fitting: "Slim Fit",
        color: ['green', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009778157-Green-Green-1000009778157_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009778157-Green-Green-1000009778157_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009778157-Green-Green-1000009778157_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009778157-Green-Green-1000009778157_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009778157-Green-Green-1000009778157_05-2100.jpg']
    },
    {
        brand: "MELANGE",
        category: "Kurta",
        price: "909",
        discount: "30",
        fitting: "Slim Fit",
        color: ['coral', 'black', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745117-Pink-Coral-1000009745117_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745117-Pink-Coral-1000009745117_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745117-Pink-Coral-1000009745117_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745117-Pink-Coral-1000009745117_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745117-Pink-Coral-1000009745117_05-2100.jpg']
    },
    {
        brand: "COLOUR ME",
        category: "Kurta",
        price: "1599",
        discount: "30",
        fitting: "Straight Fit",
        color: ['red', 'black', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009766248-Red-Red-1000009766248_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009766248-Red-Red-1000009766248_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009766248-Red-Red-1000009766248_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009766248-Red-Red-1000009766248_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009766248-Red-Red-1000009766248_05-2100.jpg']
    }
];
let Shoes = [
    {
        brand: "FILA",
        category: "sports shoes",
        price: "1499",
        discount: "50",
        color: ['black', 'white', 'pink'
        ],
        sizes: ['8-UK', '7-Uk', '9-UK'
        ],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008876521-Pink-1000008876521_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008876521-Pink-1000008876521_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008876521-Pink-1000008876521_05-2100.jpg']
    },
    {
        brand: "FILA",
        category: "sports shoes",
        price: "1819",
        discount: "10",
        color: ['black', 'white', 'yellow'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009851256-White-1000009851256_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009851256-White-1000009851256_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009851256-White-1000009851256_05-2100.jpg']
    },
    {
        brand: "ADIDAS",
        category: "sports shoes",
        price: "4299",
        discount: "30",
        color: ['white', 'black', 'pink'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010095490-Black-1000010095490_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010095490-Black-1000010095490_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010095490-Black-1000010095490_05-2100.jpg']
    },
    {
        brand: "ADIDAS",
        category: "sports shoes",
        price: "4999",
        discount: "20",
        color: ['red', 'black', 'pink'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010141396-Red-1000010141396_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010141396-Red-1000010141396_05-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010141396-Red-1000010141396_06-2100.jpg']
    },
    {
        brand: "REEBOK",
        category: "sports shoes",
        price: "3799",
        discount: "15",
        color: ['black', 'brown', 'green'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010168532-Black-1000010168532_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010168532-Black-1000010168532_05-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010168532-Black-1000010168532_04-2100.jpg']
    },
    {
        brand: "CODE",
        category: "loffers",
        price: "1549",
        discount: "50",
        color: ['brown', 'black', 'white'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010021281-Black-1000010021281_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010021281-Black-1000010021281_05-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010021281-Black-1000010021281_06-2100.jpg']
    },
    {
        brand: "CODE",
        category: "loffers",
        price: "2049",
        discount: "50",
        color: ['brown', 'black', 'white'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009512426-Brown-1000009512426_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009512426-Brown-1000009512426_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009512426-Brown-1000009512426_06-2100.jpg']
    },
    {
        brand: "CODE",
        category: "sandals",
        price: "1049",
        discount: "10",
        color: ['brown', 'black', 'white'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010222744-Brown-1000010222744_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010222744-Black-1000010222744_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010222744-Black-1000010222744_06-2100.jpg',]
    },
    {
        brand: "CODE",
        category: "sandals",
        price: "1299",
        discount: "15",
        color: ['brown', 'black', 'white'],
        sizes: ['8-UK', '7-Uk', '9-UK'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010222769-Brown-1000010222769-9042021_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010222769-Brown-1000010222769-9042021_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010222769-Brown-1000010222769-9042021_06-2100.jpg']
    }
];
let Bags = [
    {
        brand: "LAVIE",
        category: "handheld bag",
        price: "1990",
        discount: "50",
        color: ['brown', 'black', 'white'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009317906-1000009317905_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009317906-1000009317905_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009317906-1000009317905_04-2100.jpg']
    },
    {
        brand: "CODE",
        category: "handheld bag",
        price: "1690",
        discount: "40",
        color: ['brown', 'black', 'white'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009916513-1000009916508_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009916513-1000009916508_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009916513-1000009916508_05-2100.jpg']
    },
    {
        brand: "CODE",
        category: "clutch",
        price: "799",
        discount: "5",
        color: ['pink', 'black', 'white'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007179594-1000007179591-27219_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007179594-1000007179591-27219_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007179594-1000007179591-27219_06-2100.jpg']
    },
    {
        brand: "CODE",
        category: "clutch",
        price: "1699",
        discount: "10",
        color: ['pink', 'black', 'white'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008457264-1000008457263_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008457264-1000008457263_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008457264-1000008457263_05-2100.jpg']
    },
    {
        brand: "CODE",
        category: "clutch",
        price: "1399",
        discount: "10",
        color: ['pink', 'black', 'white'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009785542-1000009785541_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009785544-1000009785541_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009785544-1000009785541_03-2100.jpg']
    }
];
let kidsGirls = [
    {
        brand: "FAME FOREVER KIDS",
        cataegory: "Top",
        price: "320",
        discount: "60",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008571264-Orange-Tangerine-1000008571264_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008571264-Orange-Tangerine-1000008571264_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008571264-Orange-Tangerine-1000008571264_03-2100.jpg']
    },
    {
        brand: "JUNIORS Girls Solid",
        cataegory: "Pants",
        price: "400",
        discount: "50",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=235,w=235,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009313523-Brown-BURGANDY-1000009313523_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=235,w=235,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009313523-Black-BLACK-1000009313523_01-2100.jpg']
    },
    {
        brand: "FAME FOREVER KIDS Girls",
        cataegory: "Frok",
        price: "700",
        discount: "50",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008775331-Beige-Beige-1000008775331_01-345.jpg', 'https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008595631-Green-Green-1000008595631_01-2100.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008545858-Blue-Navy-1000008545858_01-345.jpg']
    },
    {
        brand: "FAME FOREVER YOUNG Girls",
        cataegory: " Sleeves T-shirt",
        price: "300",
        discount: "50",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008545206-Blue-Indigo-1000008545206_01-345.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000007225420-201218-Yellow-Mustard-1000007225420-201218_01-345.jpg', 'https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009827879-Multicolour-1000009827879_01-2100.jpg']
    }
];
let kidsBoys = [
    {
        brand: "ADIDAS Printed Crew Neck T-shirt",
        category: "T-shirt",
        price: "900",
        discount: "50",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009019568-Yellow-Yellow-1000009019568_01-2100.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008545858-Blue-Navy-1000008545858_01-345.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008595631-Green-Green-1000008595631_01-345.jpg']
    },
    {
        brand: "BOSSINI Boys Printed Crew Neck",
        category: "T-shirt",
        price: "300",
        discount: "50",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008545241-Blue-Blue-1000008545241_01-345.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008568475-Blue-Aqua-1000008568475_01-345.jpg', 'https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009751771-Grey-ECRU-1000009751771_01-2100.jpg']
    },
    {
        brand: "ADIDAS Printed Crew Neck",
        category: "T-shirt",
        price: "500",
        discount: "50",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008568475-Blue-Aqua-1000008568475_01-345.jpg', 'https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009751771-Grey-ECRU-1000009751771_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009751771-Grey-ECRU-1000009751771_01-2100.jpg']
    },
    {
        brand: "FAME FOREVER KIDS",
        category: "Denim Shirt",
        price: "300",
        discount: "50",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000006873961-Black-Black-1000006873961_01-345.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008980901-White-White-1000008980901_01-345.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008545473-Red-Red-1000008545473_01-345.jpg']
    }
];
let mensTopwear = [
    {
        brand: "POLO",
        category: "T-shirt",
        price: "849",
        discount: "15",
        fitting: "Regular Fit",
        color: ['black', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009811686-Black-Black-1000009811686_01-2100.jpg']
    },
    {
        brand: "LOUIS PHILIPPE",
        category: "Casual Shirt",
        price: "2,799",
        discount: "30",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ['https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010698237-White-1000010698237_01-2100.jpg']
    },
    {
        brand: "UCLA",
        category: "T-Shirt",
        price: "899",
        discount: "25",
        fitting: "Regular Fit",
        color: ['green', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005978744-30119-Green-Dark-Green-1000005978744-30119_01-2100.jpg"]
    },
    {
        brand: "POLO",
        category: "T-shirt",
        price: "1,199",
        discount: "40",
        fitting: "Regular Fit",
        color: ['orange', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010314170-Orange-Orange-1000010314170_01-2100.jpg"]
    }
];

let menBottomwear = [
    {
        brand: "WRANGLER",
        category: "Jeans",
        price: "2,096",
        discount: "30",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009038438-Blue-SuperStone-1000009038438_01-2100.jpg"]
    },
    {
        brand: "LOUIS PHILIPPE ",
        category: "Trousers",
        price: "1,799",
        discount: "10",
        fitting: "Regular Fit",
        color: ['blue', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010148219-Blue-Blue-1000010148219_01-2100.jpg"]
    },
    {
        brand: "CODE",
        category: "Trousers",
        price: "1,104",
        discount: "15",
        fitting: "Regular Fit",
        color: ['yellow', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009801789-Beige-LightKhaki-1000009801789_01-2100.jpg"]
    },
    {
        brand: "KAPPA",
        category: "Track Pants",
        price: "849",
        discount: "15",
        fitting: "Regular Fit",
        color: ['black', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009813654-Blue-Navy-1000009813654_01-2100.jpg"]
    }
];
let menActivewear = [
    {
        brand: "KAPPA ",
        category: "Shorts",
        price: "699",
        discount: "30",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009812654-Var7-White-White-1000009812654-Var7_01-2100.jpg"]
    },
    {
        brand: "KAPPA",
        category: "Track Pants",
        price: "849",
        discount: "30",
        fitting: "Regular Fit",
        color: ['green', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009813654-Var9-Green-Olive-1000009813654-Var9_01-2100.jpg"]
    },
    {
        brand: "PUMA",
        category: "Track Pants",
        price: "2,499",
        discount: "20",
        fitting: "Regular Fit",
        color: ['blue', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010653054-Blue-1000010653054_01-2100.jpg"]
    },
    {
        brand: "KAPPA",
        category: "Shorts",
        price: "849",
        discount: "15",
        fitting: "Regular Fit",
        color: ['white', 'red', 'green'],
        sizes: ['s', 'm', 'l'],
        img: ["https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010194961-White-White-1000010194961_01-2100.jpg"]
    }

];
function showProducts(data) {
    displayProductDiv.innerHTML = null;
    data.forEach(function (item) {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.src = item.img[0];
        let name = document.createElement("h6");
        name.innerText = item.brand;
        let price = document.createElement("p");
        price.innerText = "₹ " + item.price;

        let selectionDiv = document.createElement('div');
        selectionDiv.setAttribute('id', 'selectionDiv');
        let addTocartDiv = document.createElement('div');
        addTocartDiv.setAttribute('id', 'addTocartDiv');

        let colors = document.createElement('select')
        for (let i = 0; i < item.color.length; i++) {
            let option = document.createElement('option');
            option.innerText = item.color[i];
        }
        let sizes = document.createElement('select');
        for (let i = 0; i < item.sizes.length; i++) {
            let option = document.createElement('option');
            option.innerText = item.color[i];
        }
        let addtocart = document.createElement("button");
        addtocart.innerHTML = "Add to Cart";
        addtocart.addEventListener("click", function (event) {
            addtocart(item);
        });

        selectionDiv.append(colors, sizes);
        addTocartDiv.append(addtocart);

        card.append(img, price, name, selectionDiv,addTocartDiv);
        displayProductDiv.append(card);
    });
}
showProducts(menBottomwear);
