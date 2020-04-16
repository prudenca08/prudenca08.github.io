let app = new Vue({
    el: '#app',
    data: {
        myname: 'Prudenca Ahmad Daffa Kurnia',
        mystory: '',
        photo: null,
        social: {
            email: 'prudencaahdaffa08@gmail.com',
            tg: 'daffa08',
            git: 'daffagithub08'
        },
        aboutme: `
  <p>Hello 👋, Nama Saya Prudenca Ahmad Daffa, Saya beragama muslim dan tinggal di Kudus (Indonesia 🆔)</p>
  <p>Saya suka membuat website dan tools. Saya juga senang mengamati perkembangan teknologi dan informasi yang ada.</br>Jika anda membutuhkan saya,jangan lupa hubungi saya di contact yang ada. 😊</p>
  <p>Terimakasih atas perhatiannya 😅</p>
  `
    },
    methods: {
        getStory() {
            // Axios
            axios.get('https://t.me/daffa08')
                .then(res => {
                    // console.log(res.data)
                    this.myname = /class="tgme_page_title">(.+?)</.exec(res.data)[1]
                    this.mystory = /class="tgme_page_description ">(.+?)</.exec(res.data)[1]
                    this.photo = /class="tgme_page_photo_image" src="(.+?)"/.exec(res.data)[1]
                })
                .catch(e => {
                    console.error('Failed to fetch API')
                    console.error(e)
                })
        }
    },
    mounted() {
        this.getStory()
    }
})