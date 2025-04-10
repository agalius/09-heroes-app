import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers"



export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (

        <>
            <h2>Superheroes</h2>
            <div className="row rows-cols-1 row-cols-md-3 g-3">

                {
                    heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))
                }



            </div>

        </>

    )
}
