import {Document,Page} from "react-pdf"

function Pdfview(){
    return (
        <div>
           <Document file={"/cours.pdf"}>
               <Page pageNumber={1}/>
           </Document>
        </div>
    )
}
export default Pdfview;