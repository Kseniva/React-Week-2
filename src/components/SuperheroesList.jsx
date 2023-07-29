import superheroes from '../data/superheroes.json'

export default function SuperheroesList() {
    console.log(superheroes);
    return (
        <div>
            <h1 className='page-header'>SuperheroesList</h1>  
                <div className='list-superheroes'>
                    {
                        superheroes.map((item,index)=> (
                            <div className='superhero' key={index}>
                                <h2>{item.name}</h2>
                                <p><span>Вселенная:</span> {item.universe}</p>
                                <p><span>Альтер-эго:</span> {item.alterego}</p>
                                <p><span>Род деятельности</span> {item.occupation}</p>
                                <p><span>Друзья:</span> {item.friends}</p>
                                <p><span>Суперсилы:</span> {item.superpowers}</p>
                                <img src={item.url}></img>
                                <p><span>Биография:</span> {item.info}</p>
                                <a href={item.url}>Click to get the picture</a>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}