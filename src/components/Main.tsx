import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TableHead, TableBody, TableCell, TableRow, Table } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useCryptoContext } from "../utils/store";
import { Info } from "../types";

const apiURL = "https://api.coingecko.com/api/v3/exchanges";

export const Main = (props: any) => {
    const navigate = useNavigate();
    const {details, setDetails} = useCryptoContext()

    const fetchData = useCallback((url: string): void => {
        try {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setDetails(data.slice(0, 10)));
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleRowClick = (id: string) => {
        navigate(`/tableDetail?currencyId=${id}`)
    }

    useEffect(() => {
        fetchData(apiURL);
    });

    return (
        <Grid xs={12} md={6} sm={2}>
            <Typography variant="h4" align="center">
                Top 10 Cryptocurrency Exchange List
            </Typography>
            <Table className="data-container">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Country</TableCell>
                        <TableCell align="center">URL</TableCell>
                        <TableCell align="center">Logo</TableCell>
                        <TableCell align="center">Trust Rank</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {details.map((item: Info) => (
                    <TableRow key={item.id} hover={true} onClick={() => handleRowClick(item.id)}>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">{item.country}</TableCell>
                        <TableCell align="center">
                            <a href={item.url}>{item.url}</a>
                        </TableCell>
                        <TableCell align="center">
                            <img src={item.image} alt="" />
                        </TableCell>
                        <TableCell align="center">{item.trust_score_rank}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Grid>
    );
};
