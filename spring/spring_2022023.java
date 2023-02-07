import javax.management.Query;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlID;

@Entity
public class Example {
    @Id 
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;

    public Example(){
    }

    public Example(String name,String description){
        this.name=name;
        this.description=description;
    }

    public Long getId (){
        return id;
    }
    public void setId (Long id){
        this.id=id;
    }
    public String getName (){
        return name;
    }
    public void setName (String name){
        this.name=name;
    }
    public String getDescription(){
        return description;
    }
    public void setDescription (String description){
        this.description=description;
    }

    @Override
    public String toString(){
        return "Example{"+
        "id="+id+
        ",name='"+name+'\''+
        ",description='"+description+'\''+
        '}';
    }   
}

@RestController
@RequestMapping("/api/examples")
public class ExampleController {
    private final ExampleController {
        private final ExampleRepository repository;

        public ExampleController(ExampleRepository repository){
            this.repository=repository;
        }
    }

    @GetMapping
    public List<Example> getAllExamples(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Example getExampleById(@PathVariable Long id) {
        return repository.findById(id)
        .orElseThrow() -> new ResourceNotFoundException("Example not found with id")
    }

    @PostMapping 
    public Example creatExample(@RequestBody Example example){
        return repository.save(example);
    }
}


public class ShoppingDAO {
    private MongoTemplate mongoTemplate;

    public ShoppingDAO(MongoTemplate mongoTemplate){
        this.mongoTemplate=mongoTemplate;
    }

    public void addProduct(product product){
        mongoTemplate.inser(product);
    }

    public Product getProductById(String id){
        return mongoTemplate.findOne(Query.query(Criteria.where("id").is(id)),Product.class);
    }

    public void updateProduct(Product product){
        mongoTemplate.updateFirst(
            Query.query(Criteria.where("id").is(product.getId())),
            Update.update("name",product.getNamte()).set("description",product.getDescription()).
            set("price",product.getPrice()),
            Product.class
        );
    }

    public void deleteProductById(String id){
        mongoTemplate.remove(Query.query(Criteria.where("id").is(id)),Product.clas);
    }
}


