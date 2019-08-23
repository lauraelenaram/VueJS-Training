var app= new Vue({
    el: '#app',
    data: 
    {
        list: [],
        name: '',
        note: ''
    },
    methods: 
    {
        AddNote: function()
        {
            statusA= false;
            if(this.note>=6)
            {
                statusA= true;
            }
            if(this.name!="" && this.note!="")
            {
                this.list.push({name: this.name, note: this.note, status: statusA});
                this.name="";
                this.note="";
            }
            else
            {
                alert("Ingrese el nombre y el promedio del estudiante");
            }
        }
    }
   
})