`use strict`

exports.ok = (values , res) =>{
    let data = {
        'status':200,
        'values':values,
    }
    res.json(data)
    res.end()
}
exports.err = (values , res) =>{
    let data = {
        'status':500,
        'values':values,
    }
    res.json(data)
    res.end()
}

//response Nested matkul

exports.okeNested = (values,res) => {
    const result = values.reduce((akumulasikan, item) => {
        //tentukan key group

        if(akumulasikan[item.nama]){
            //buat var group nama mahasiswa
            const group = akumulasikan[item.nama]
            //cek jika ada array
            if(Array.isArray(group.matkul)){
                group.matkul.push(item.matkul)
            }else{
                group.matkul = [group.matkul,item.matkul]
            }
        }else{
            akumulasikan[item.nama] = item
        }
        return akumulasikan
    },{})
    let data = {
        'status':500,
        'values':result,
    }
    res.json(data)
    res.end()
}