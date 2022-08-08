//MATERIAL-UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Table_({
    data
}: {
    data: any[]
}) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className="!text-base SCREEN625:!text-sm SCREEN1000:!text-xs !text-[#cccccc] SCREEN350:!leading-5 !whitespace-nowrap !tracking-wider"> ASSET </TableCell>
                    <TableCell className="!text-base SCREEN625:!text-sm SCREEN1000:!text-xs !text-[#cccccc] SCREEN350:!leading-5 !whitespace-nowrap !tracking-wider !text-center"> TOKEN AMOUNT </TableCell>
                    <TableCell className="!text-base SCREEN625:!text-sm SCREEN1000:!text-xs !text-[#cccccc] SCREEN350:!leading-5 !whitespace-nowrap !tracking-wider !text-center"> VALUE </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell className="!text-lg SCREEN625:!text-base SCREEN1000:!text-xs SCREEN350:!leading-5 !whitespace-nowrap !text-white"> <div className="flex items-center"> <img src={row.pic} alt={row.name} className={`${row.name === "LP" ? `w-[43px] h-[37px] -ml-1` : `w-[28px] h-[28px]`}`} /> <span className={`${row.name === "LP" ? `ml-0.5` : `ml-3`}`}> {row.name} </span> </div> </TableCell>
                        <TableCell className="!text-xl SCREEN625:!text-lg SCREEN1000:!text-xs SCREEN350:!leading-5 !whitespace-nowrap !text-white !text-center"> {row.tokenAmount} </TableCell>
                        <TableCell className="!text-xl SCREEN625:!text-lg SCREEN1000:!text-xs SCREEN350:!leading-5 !whitespace-nowrap !text-white !text-center"> {row.value} </TableCell>
                    </TableRow> 
                ))}
            </TableBody>
        </Table>
    )
}

export default Table_;