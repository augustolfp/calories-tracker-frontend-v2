import MealDash from './MealDash';

export default function MealList(props: any) {
    return (
        <>
            {Object.keys(props).map((key) => {
                const meal = props[key];
                return <MealDash key={key} {...meal} />;
            })}
        </>
    );
}
