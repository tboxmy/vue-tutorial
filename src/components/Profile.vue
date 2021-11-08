<template>
    <div class="container"><img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <div>
        Profile <strong>{{name.first}} {{name.last}}</strong>
        <p><i class="far fa-address-card fa-9x"></i></p>
        </div>

        <div v-for="user in this.content"  v-bind:key="user">
            <table border="1">
            <tbody >
                <tr >
                    <td>{{user.name.first}}</td><td>{{user.name.last}}</td>
                </tr>
                <tr >
                    <td>{{user.location.city}}</td><td>{{user.location.coordinates}}</td>
                </tr>
                <tr >
                    <td>{{user.email}}</td><td>Age: {{user.dob.age}}</td>
                </tr>
            </tbody>
            </table>  

        </div>        
        <div>{{content}}</div>
        
    </div>
</template>

<script>
import UserProfileService from "../services/userProfile";
export default {
  name: 'Profile',
  
   data(){       
    return {
      msg: "My products",
      content: "", 
      name: [],  
      location: [],  
    };
   },
  mounted() {
    this.getData();
  },
  methods: {
    async  getData(){
        UserProfileService.getUserProfile().then(
        (response) => {
            this.content = response.data.results;
            this.name = this.content[0].name;
            this.location = this.content.location;
            console.log(this.content);
        },
        (error) => {
            this.content =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        }
        );
    }
  }
  
};
</script>