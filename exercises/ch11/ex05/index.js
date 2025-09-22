export function detectFileType(buffer){
    const view = new Uint8Array(buffer);

    //PDF 25 50 44 46 2D	%PDF-

    if (view[0] === 0x25 && view[1] === 0x50 && view[2] === 0x44 && view[3] === 0x46 && view[4] === 0x2D){
        return "PDF";
    }

    //Zip 50 4B 03 04
    //    50 4B 05 06 (empty archive)
    //    50 4B 07 08 (spanned archive)	PK␃␄
    //PK␅␆
    //PK␇␈

    if (view[0] === 0x50 && view[1] === 0x4B){
        if (view[2] === 0x03 && view[3] === 0x04 || view[2] === 0x05 && view[3] === 0x06 || view[2] === 0x07 && view[3] === 0x08){
            return "ZIP"
        }
    }

    //GIF 47 49 46 38 37 61
    //    47 49 46 38 39 61	GIF87a
    //GIF89a

    if (view[0] === 0x47 && view[1] === 0x49 && view[2] === 0x46 && view[3] === 0x38 && view[5] === 0x61){
        if (view[4] === 0x37 || view[4] === 0x39){
            return "GIF"
        }
    }

    //89 50 4E 47 0D 0A 1A 0A	‰PNG␍␊␚␊
    
    if (view[0] === 0x89 && view[1] === 0x50 && view[2] === 0x4E && view[3] === 0x47 && view[4] === 0x0D && view[5] === 0x0A && view[6] === 0x1A && view[7] === 0x0A){
        return "PNG";
    }

    return "UNKNOWN"

}