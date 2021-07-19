import Slave from '../slave.jpg'
import Master from '../master.jpeg'
import MasterList from './MasterList'

const Response = ({name, nameLenght, masterList}) => {
    
    const masterChecker = (masterList, name) => {
        let response = {
            'text': 'Пошел вон slave '+ name + '!', 
            'img' : Slave,
            'result': false};
        for(let i = 0; i < masterList.length; i++)
        {
            if(name.toLowerCase() === masterList[i].toLowerCase())
            {
                response = {
                    'text':'WelCUM back MASTER ' + name + '!',
                    'img': Master,
                    'result': true
                };
                return response;
            }
        }
        return response;
    }


    //For whatever reason masterList.length in MasterList.js gives me undefined
    let masterListLength = masterList.length;

    let finalResponse = masterChecker(masterList, name);

    return (
        <>
            { nameLenght > 0 &&
            (
                <div>
                    <h1>{finalResponse.text}</h1>
                    {finalResponse.result && <div><p>Your fellow MASTER brothers are:</p> <MasterList masterList = {masterList} masterListLength = {masterListLength}/></div>}
                    <img alt='img' src={finalResponse.img} width="100%" style={{ maxWidth: '900px'}}/>
                </div>
            )
            }
            
        </>
    )
}

export default Response
