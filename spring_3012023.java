import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/schools")
public class spring_3012023 {

    @Autowired
    private SchoolRepository repository;

    @GetMapping
    public List<School> getAllSchools(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public School getSchoolById(@PathVariable long id){
        return repository.findById(id).orElse(null);
    }

    @PostMappingpublic School createSchool(@RequestBody School school){
        return repository.save(school);
    }

    @PutMapping("/{id}")
    public School updateSchool(@PathVariable long id, @RequestBody School school){
        School existingSchool=repository.findById(id).orElse(null);
        if(existingSchool!=null){
            existingSchool.setName(school.getName());
            existingSchool.setAddress(school.getAddress());
            return repository.save(existingSchool);
        }
        return null;

        @DeleteMapping("/{id}")
        public void deleteSchool(@PathVariable long id){
            repository.deleteById(id);
        }
    }
    
}

/**
 * This controller defines several RESTful endpoints for creating, reading,updating, and deleting schools from
 * the database. The `SchoolRepository` is an interface that extends `CrudRepository` and provides basic CRUD operations
 * for the `School` entity
 * 
 * 
*/


/**
 *  import org.springframework.boot.SpringApplication;
 *  import org.springframework.boot.autoconfigure.SpringBootApplication;
 *  import org.springframework.web.bind.annotation.*;
 * 
 * 
 * 
*/

public class SchoolApiApplication {

    public static void main(String[] args){
        SpringApplication.run(SchoolApiAppication.class, args);
    }

    
}