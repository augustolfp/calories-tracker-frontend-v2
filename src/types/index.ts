export type MealBody = {
    name: string;
    description: string;
    countedDayId: number;
};

export type MealIngredient = {
    id: number;
    name: string;
    mealId: number;
    weight: number;
    carbs: number;
    fats: number;
    proteins: number;
    kcals: number;
};

export type IngBody = Omit<MealIngredient, 'id'>;

export type DayMeal = {
    mealId: number;
    countedDayId: number;
    mealName: string;
    mealDescription: string;
    mealCreationDate: string;
    carbs: number;
    fats: number;
    proteins: number;
    kcals: number;
    ingredientList: MealIngredient[];
};

export type Day = {
    id: number;
    day: string;
    notes: string;
    userId: number;
    caloriesTarget: number;
    proteinsTarget: number;
    carbs: number;
    fats: number;
    proteins: number;
    kcals: number;
    dayMeals: DayMeal[];
};

export type DayBody = Pick<
    Day,
    'day' | 'notes' | 'caloriesTarget' | 'proteinsTarget'
>;

export type SearchResult = {
    id: number;
    description: string;
    baseQty: number;
    proteins: number;
    carbs: number;
    fats: number;
    kcals: number;
};
