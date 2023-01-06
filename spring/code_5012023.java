import java.util.jar.Attributes.Name;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

// @SpringBootAppliaction
// @EnableMongoRepositories
// public class Application {
//     public static void main(String[] args) {
//         SpringApplication.run(Application.class, args);
//     }
// }

public class Item {
    @Id 
    private String id;
    private String name;
    private String description;

    public Item(){}

    public Item(String name, String description) {
        this.name=name;
        this.description= description;
    }

    public String getID(){ return id; }
    public void setId(String id) {this.id=id;}
    
    public String getName(){ return name; }
    public void setName(String name) {this.name=name;}

    public String getDescription(){ return description; }
    public void setDescription(String description) {this.description=description;}

}

public interface ItemRepository extends MongoRepository<Item,String>{}

/**
 * RestController
 * RequestMapping
*/

public class ItemController {
    private final ItemRepository repository;

    public ItemController(ItemRepository repository){
        this.repository=repository;
    }

    @GetMapping
    public List<Item> getAllItems(){
        return repository.findAll();
    }

    @PostMapping
    public Item addItem(@RequestBody Item item){
        return repository.save(item);
    }

    @GetMapping("/{id}")
    public Item getItem(@PathVariable String id){
        return repository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable String id, @RequestBody Item item){
        Item existingItem= repository.findById(id).orElse(null);
        if(existingItem==null){
            return null;
        }
        existingItem.setName((item.getName()));
        existingItem.setDescription(item.getDescription());
        return repository.save(existingItem);
    }
}



/**
 * Model: the `Item` class represents the model in this example.
 * POJO(plain old java object) that represents a document in the `items`
 * collection in the MongoDB database.
 * 
 * View: using a REST API as the view, the view is the HTTP response that is
 * returned to the client.
 * 
 * 
 * Controller: The `ItemController` class is the controller in this example.
 * It handles HTTP requests and performs CRUD operations on the `Items`
 * collection using the `ItemRepository`
 * 
 * Here is how the MVC components interact with each other:
 * 1.The client sends an HTTP request to the server.
 * 2.The controller receives the request and processes it.
 * 3.The controller uses the repository to perform the necessary CRUD operation on the model
 * 4.The controller returns an HTTP response to the client, which represents the view.
 * 
 * **/