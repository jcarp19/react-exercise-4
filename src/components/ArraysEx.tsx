import {useState} from "react";

interface Pet {
    name: string,
    type: string,
    id: number
}

export default function ArrayEx() {
    const [colors, setcolors] = useState(["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Black"]);
    const [pets, setPets] = useState<Pet[]>([
        {name: "Chloe", type: "Dog", id: 99},
        {name: "Cooper", type: "Dog", id: 100},
        {name: "Clyde", type: "Dog", id: 101},
        {name: "Abby", type: "Dog", id: 102},
        {name: "Zoey", type: "Dog", id: 103}
    ]);
    
        function addColor(color: string): void {
        // copy then modify
        const newColors = [...colors];
        newColors.push(color);
        setcolors(newColors);

        // BELOW IS THE WRONG WAY TO DO IT
        // colors.push(color);
        // setcolors(colors);
    };

    return (
    <>
        <div>
            <h1>React Exercise 4</h1>
            <h2>Colors</h2>
            <ol>
                {colors.map((color, index) => <li key={index}>{color}</li>)}
            </ol>
            <button onClick={() => {addColor("Purple")}}>Purple</button>
            <button onClick={() => {addColor("Orange")}}>Orange</button>
            <button onClick={() => {addColor("Gold")}}>Gold</button>
        </div>
        <div>
            <h2>Pets</h2>
            <table cellPadding={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, index) => {
                        return (
                            <tr key={index}>
                                <td>{pet.id}</td>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    </>
    )
}