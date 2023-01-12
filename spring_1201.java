import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplicaiton;


/**
 * code practice springboot-crud
 * https://github.com/zianwar/springboot-crud-demo
 * 
 * 
 * FE BE
*/

// @SpringBootApplication
// public class SpringWebApplication {

//     public static void main(String[] args) {
//         SpringApplication.run(SpringBootApplicaiton.class, args);
//     }
// }


// public class ProductServiceImpl implements ProductService {
//     @Autowired
//     private ProductRepository ProductRepository;


//     @Override
//     public Iterable<Product> listAllProducts(){
//         return ProductRepository.findAll();  // get all
//     }

//     @Override
//     public Product saveProduct(Product product){
//         return ProductRepository.save(product); // add
//     }

//     @Override
//     public void deleteProduct(Integer id){
//         ProductRepository.deleteById(id);  // delete by ID
//     }
// }

// public interface ProductService {
//     Iterable<Product> listAllProducts();

//     Product getProductByID(Integer id);

//     Product saveProduct(Product product);

//     void deleteProduct(Integer id);
// }

// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.Version;
// import java.math.BigDecimal;;

// @Entity
// @Getter
// @Setter
// @NoArgsContructor
// public class Product {
//     @id
//     @GeneratedValue(Strategy=GenerationType.AUTO)
//     private Integer id;

//     @Version
//     private Integer version;
//     private String productId;
//     private String name;
//     private BigDecimal price;

// }




@RestController("/products")
public class ProductController {
     @Autowired
     private ProductService productService;

   

    /**
     * List all products.
     *
     * @param model
     * @return
     */
   @GetMapping("/")
    public String list(Model model) {
        model.addAttribute("products", productService.listAllProducts());
        System.out.println("Returning products:");
        return "products";
    }

    /**
     * View a specific product by its id.
     *
     * @param id
     * @param model
     * @return
     */
    @GetMapping("/{id}")
    public String showProduct(@PathVariable Integer id, Model model) {
        model.addAttribute("product", productService.getProductById(id));
        return "productshow";
    }

    // Afficher le formulaire de modification du Product
    @PutMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, Model model) {
        model.addAttribute("product", productService.getProductById(id));
        return "productform";
    }

    /**
     * New product.
     *
     * @param model
     * @return
     */
    @RequestMapping("product/new")
    public String newProduct(Model model) {
        model.addAttribute("product", new Product());
        return "productform";
    }

    /**
     * Save product to database.
     *
     * @param product
     * @return
     */
    @RequestMapping(value = "product", method = RequestMethod.POST)
    public String saveProduct(Product product) {
        productService.saveProduct(product);
        return "redirect:/product/" + product.getId();
    }

    /**
     * Delete product by its id.
     *
     * @param id
     * @return
     */
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        productService.deleteProduct(id);
        return "redirect:/products";
    }

}


public interface ProductRepository extends JpaRepository<Product, Integer> {

}
/**
 * @ application.properties
 * 
spring.datasource.url=jdbc:mysql://localhost:3306/test
spring.datasource.username=root
spring.datasource.password=root1234
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update

*/

