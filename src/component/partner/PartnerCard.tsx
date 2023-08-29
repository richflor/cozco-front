import { Card, CardContent, CardActions, Link, Typography } from "@mui/material";

export interface IAppProps {
    partner:{
        id:number,
        type:string,
        name:string,
        address:string,
        socials?:{
            website?:string,
            instagram?:string,
            facebook?:string
        }
    }
}

export function PartnerCard ({partner}: IAppProps) {
  return (
    <Card
        sx={{
            display: "inline-block",
            width: "100%",
            boxSizing: "border-box",
            padding: 2.5,
            bgcolor: "secondary.light",
            height: 250
        }}
    >
        <CardContent>
            <Typography variant="h6" color="primary.dark" fontFamily="Cunia" sx={{ whiteSpace:"normal"}}>{partner.name}</Typography>
            <Typography variant="subtitle1" color="initial" sx={{ whiteSpace:"normal"}}>{partner.address}</Typography>
        </CardContent>
        <CardActions
            sx={{
                display:"flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}
        >
            {partner.socials?.website && <Link underline="always" target="_blank" href={partner.socials.website}>Site Web</Link>}
            {partner.socials?.instagram && <Link target="_blank" href={partner.socials.instagram}><img src="/footer/insta.svg" alt="logo_insta" style={{ objectFit:"contain", height: 35}}/></Link>}
            {partner.socials?.facebook && <Link target="_blank" href={partner.socials.facebook}><img src="/footer/fb.svg" alt="logo_fb" style={{ objectFit:"contain", height: 35}}/></Link>}
        </CardActions>
    </Card>
  );
}
