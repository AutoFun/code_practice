import java.util.Objects;

import javax.annotation.Generated;

import javafx.scene.chart.BubbleChart;

@entity
public class Employee {
    private @id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String description;

    private @Version @JsonIgnore Long version;

    private Employee(){}

    public Employee(String firstName, String lastName, String description){
        this.firstName=firstName;
        this.lastName=lastName;
        this.description=description;
    }

    @Override
    public boolean equals(Object o){
        if(this==o) return true;
        if(o==null || getClass() !=o.getClass()) return false;
        Employee employee=(Employee) o;
        return Objects.equals(id,employee.id)&&
        Objects.equals(firstName, employee.firstName)&&
        Objects.equals(lastName, employee.lastName)&&
        Objects.equals(description, employee.description)&&
        Objects.equals(version, employee.version);

    }

   @Override
   public int hashCode(){
    return Objects.hash(id,firstName,lastName,description,version);
   }

   public Long getId(){
    return id;
   }

   public void setId(Long id){
    this.id=id;
   }

   public Long getFirstName(){
    return firstName;
   }

   public void getFirstName(Long firstName){
    this.firstName=firstName;
   }

   public Long getLastName(){
    return lastName;
   }

   public void getLastName(Long lastName){
    this.lastName=lastName;
   }

   public Long getDescription(){
    return description;
   }

   public void setDescription(Long description){
    this.description=description;
   }

   public Long getVersion(){
    return version;
   }

   public void setVersion(Long version){
    this.version=version;
   }

   @Override
   public String toString(){
    return "Employee{"+
    "id="+id+
    ",firstName='"+firstName+'\''+
    ",lastName='"+lastName+'\''+
    ",description='"+description+'\''+
    ",version='"+version+
    '}';
   }

}


// onUpdate(employee,updatedEmployee){
//     client({
//         method:'PUT',
//         path:employee.entity._links.self.href,
//         entity:updatedEmplyee,
//         headers:{
//             'Content-Type':'application/json',
//             'if-Match': employee.headers.Etag
//         }
//     }).done(response=>{
//         this.loadFromServer(this.state.pageSize);
//     },response=>{
//         if(response.status.code===412){
//             alert('DENIED:Unable to update'+
//             employee.entity._links.self.href+'. Your copy is
//             stale.');
//         }
//     });

    
// }