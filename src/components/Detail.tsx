import { Grid, TableHead, TableBody, TableCell, TableRow, Table, Button } from "@mui/material"
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom"

import { useCryptoContext } from "../utils/store";
import { Info } from "../types"
import { flexbox } from "@mui/system";

export const Detail = () => {

    const { details } = useCryptoContext()
    const navigate = useNavigate()

    const curPath = window.location.href
    const id = curPath.slice(curPath.indexOf("Id") + 3, curPath.length)
    const detail = details.find(detail => detail.id === id)

    const handleClick = () => {
        navigate("/")
    }

    return(
        <Grid item xs={12} md={6} sm={2} sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <Typography variant="h4" align="center">Details</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Property</TableCell>
                        <TableCell align="center">Detail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">{detail?.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Country</TableCell>
                        <TableCell align="center">{detail?.country}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Trust Rank</TableCell>
                        <TableCell align="center">{detail?.trust_score_rank}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Logo</TableCell>
                        <TableCell align="center"><img src={detail?.image} alt=""/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Year of Establishment</TableCell>
                        <TableCell align="center">{detail?.year_established}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Social Media</TableCell>
                        <TableCell align="center">{detail?.url}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">{detail?.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button variant="contained" sx={{margin: 50 + "px"}} onClick={() => handleClick()}>Back</Button>
        </Grid>
    )

}