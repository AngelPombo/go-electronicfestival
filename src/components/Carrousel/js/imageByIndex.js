import image1 from '../images/6ejou.png'
import image2 from '../images/Afem-Syko.png'
import image3 from '../images/Obscure-Shape.png'
import image4 from '../images/Carv.png'
import image5 from '../images/EllenAllien3.png'
import image6 from '../images/Helena-Hauff.png'
import image7 from '../images/Lars-Huismann.png'
import image8 from '../images/LukeSlater.png'
import image9 from '../images/Nastia.png'
import image10 from '../images/Oguz.png'
import image11 from '../images/Rebekah.png'
import image12 from '../images/Remco-Beekwilder.png'
import image13 from '../images/RJ-Junior.png'
import image14 from '../images/Steh.png'
import image15 from '../images/TheLadyMachine.png'
import image16 from '../images/Estella-Boersma.png'
import image17 from '../images/Nikolina.png'
import image18 from '../images/Toni-Alvarez.png'

export const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
