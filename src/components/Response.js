import Slave from '../slave.jpg'
import Master from '../master.jpeg'

const Response = ({name, nameLenght, masterList}) => {
    
    const masterChecker = (masterList, name) => {
        let response = {
            'text': 'Пошел вон slave '+ name + '!', 
            'img' : Slave};
        for(let i = 0; i < masterList.length; i++)
        {
            if(name.toLowerCase() === masterList[i].toLowerCase())
            {
                response = {
                    'text':'WelCUM back MASTER ' + name + '!',
                    'img': Master
                };
                return response;
            }
        }
        return response;
    }

    let finalResponse = masterChecker(masterList, name);

    return (
        <>
            { nameLenght > 0 &&
            (
                <div>
                    <h1>{finalResponse.text}</h1>
                    <img alt='img' src={finalResponse.img} width="100%" style={{ maxWidth: '900px'}}/>
                </div>
            )
            }
            
        </>
    )
}

export default Response
