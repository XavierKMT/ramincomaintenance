import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";
import './ServicesCard.css';
import text from './TextLanguage.json';

function ServicesCard() {

    const services = text.lang === 'en' ? [
        ['Painting', 'Interior and Exterior painting'],
        ['Deck Staining', 'Semi-Transparent and Opaque Stains'],
        ['General Repairs', 'Drywall, Trim, Deck, Fence and much more!'],
        ['General Installations', 'Basic installations that comply with our RBQ accreditation (in progress)'],
        ['Pressure Washing', 'Cleaning driveways, walkways, house siding and much more!'],
        ['Outdoor Projects', 'Cleaning gutters, raking leaves, landscaping, and much more!']
    ] : [
        ['Peinture', 'Peinture intérieure et extérieure'],
        ['Teinture de terrasse', 'Teintures semi-transparentes et opaques'],
        ['Réparations générales', 'Cloisons sèches, plinthes, moulures, terrasses, clôtures et bien plus encore!'],
        ['Installations générales', 'Installations de base conformes à notre accréditation RBQ (en cours)'],
        ['Lavage à pression', 'Nettoyage des allées, des allées, des revêtements de maison et bien plus encore!'],
        ['Projets extérieurs', 'Nettoyage des gouttières, ratissage des feuilles, aménagement paysager et bien plus encore!']
    ];

    return (
        <Grid id='grid-container' container spacing={2}>
            {services.map(service => (
                <Grid item sm={4} xs={6} key={service[0]}>
                    <Card id='card'>
                        <CardHeader
                            id='card-header'
                            title={service[0]}
                        />
                        <CardContent>
                            <Typography id='card-content'>
                                {service[1]}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ServicesCard;