function showDataBarang(index){
    let getTable = document.getElementById('table-products')
    console.log(getTable)

    let getTbody = getTable.getElementsByTagName('tbody')[0]
    console.log(getTbody)

    let tr = ''
    for(let i=0; i < dataBarang.length; i++){
        if(i == index){
            tr += `
                <tr>
                    <td>
                        <center>${i+1}</center>
                    </td> 
                    <td>
                        <center><input type="text" name="product-name" value="${dataBarang[index].Name}" class="input-edit-product"></center>
                    </td>
                    <td>
                        <center><input type="number" name="product-price" value="${dataBarang[index].Price}" class="input-edit-product"></center>
                    </td>
                    <td>
                        <center><input type="text" name="product-category" value="${dataBarang[index].Category}" class="input-edit-product"></center>
                    </td>
                    
                    <td>
                        <center>
                            <input type="button" name="button-save" value="Save" onClick="onSaveProduct(${index})">
                            <input type="button" name="button-cancel" value="Cancel" onClick="showDataBarang()">
                        </center>
                    </td>
                </tr> 
            `
        }else{
            tr += `
                <tr>
                    <td>
                        <center>${i+1}</center>
                    </td> 
                    <td>
                        <center>${dataBarang[i].Name}</center>
                    </td>
                    <td>
                        <center>${dataBarang[i].Price}</center>
                    </td>
                    <td>
                        <center>${dataBarang[i].Category}</center>
                    </td>
                   
                    <td>
                        <center>
                            <input type="button" name="button-edit" value="Edit" onClick="editProduct(${i})">
                            <input type="button" name="button-delete" value="Delete" onClick="deleteProduct(${i})">
                        </center>
                    </td>
                </tr> 
            `
        }
    }

    getTbody.innerHTML = tr
}

showDataBarang()

function addDataProduct(){
    let inputs = document.getElementsByClassName('input-product')
    console.log(inputs)

    let productName = inputs[0].value
    let price = inputs[1].value
    let category = inputs[2].value
    
    if(productName && price && category){
        dataBarang.push({
            Name: productName,
            Price: price,
            Category: category
        })

        showDataBarang()

        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''

    }else{
        let errorMessage = document.getElementById('error-message')
        errorMessage.innerHTML = 'Data Must Be Filled!'
    }
}

document.getElementById('button-submit').addEventListener('click', addDataProduct)

function deleteProduct(i){
    let confirmBox = confirm(`Are you sure want to delete product ${dataBarang[i].Name}?`)

    if(confirmBox){
        dataBarang.splice(i, 1)
        alert('Delete Product Success!')

        showDataBarang()
    }
}

function editProduct(i){
    let confirmBox = confirm(`Are you sure want to edit ${dataBarang[i].Name}`)

    if(confirmBox == true){
        showDataBarang(i)
    }
}

function onSaveProduct(index){
    let inputs = document.getElementsByClassName('input-edit-product')
    
    let productName = inputs[0].value
    let price = inputs[1].value
    let category = inputs[2].value

    if(productName && price && category){
        dataBarang[index].Name = productName
        dataBarang[index].Price = price
        dataBarang[index].Category = category

        alert('Edit Data Success!')

        showDataBarang()
    }
}