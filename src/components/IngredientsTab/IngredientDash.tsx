import { Box, Grid, GridItem, Flex, Center } from '@chakra-ui/react';
import { MealIngredient } from '../../types';
import IngredientResumeCard from './IngredientResumeCard';

export default function IngredientDash(props: MealIngredient) {
    return (
        <>
            <Grid
                templateAreas={`"title title"
                            "quantity resumeCard"`}
                gridTemplateColumns="1fr 2fr"
                w="full"
            >
                <GridItem
                    area="title"
                    color="pageGreen.500"
                    fontSize={['28px', '30px', '36px', '40px']}
                    fontWeight="400"
                    lineHeight={1}
                    textAlign="center"
                >
                    {props.name}
                </GridItem>
                <GridItem
                    area="quantity"
                    color="pageGreen.500"
                    fontSize={['28px', '30px', '36px', '40px']}
                    fontWeight="600"
                    lineHeight={1}
                    textAlign="center"
                >
                    Quant. <br /> {props.weight}g
                </GridItem>
                <GridItem area="resumeCard">
                    <IngredientResumeCard
                        carbs={props.carbs}
                        kcals={props.kcals}
                        fats={props.fats}
                        proteins={props.proteins}
                    />
                </GridItem>
            </Grid>
        </>
    );
}
