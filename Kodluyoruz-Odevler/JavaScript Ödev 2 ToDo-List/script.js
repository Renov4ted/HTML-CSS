//DOM Etiketlerimizi ayarladık
let inputDOM = document.querySelector(`#task`)
let btnDOM = document.querySelector(`#liveToastBtn`)
let ulDOM = document.querySelector(`#list`)

btnDOM.addEventListener(`click`, function () {

    let liDOM = document.createElement(`li`)
    let info = inputDOM.value //İnputa girilen bilgiyi info diye bir değişkene atadık.
    liDOM.innerHTML = info // ve Üstte createElement ile oluşturup liDOM'a atadığımız değişkenin içine info bilgisinin yazılmasını sağladık.
    ulDOM.appendChild(liDOM) //Oluşturduğumuz liDOM'u appendChild ile ulDOM'a aktardık.  
    inputDOM.value = ""; // Bilgiyi gönderince input Barının sıfırlanmasını sağladık.

    localStorage.setItem(`item ${localStorage.length + 1}`, liDOM.innerText) // Girilen her bir bilginin local storagede tutulmasını sağladık.

    liDOM.addEventListener(`click`, function () {
        liDOM.style.textDecoration = "line-through"; // liDOM'a 1 defa tıklanması durumunda ustunun cizilmesini sağladık.
        liDOM.style.cursor = "pointer"
    })
    liDOM.addEventListener(`dblclick`, function () { // X butonu eklemek yerine liDOM'a 2 Kez tıklanması durumunda liDOM'un yani yapılacak to do'nun silinmesini sağladık.
        ulDOM.removeChild(liDOM)
    })
})

// If && Else yapısını kullanıp boş bilgi girilmemesini sağlamaya çalıştım ama yapamadım. Else ile Alert çıkarabilsem bile boş bilgi girilme durumuna engel olamadım 