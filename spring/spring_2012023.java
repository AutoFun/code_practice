package spring;
import java.util.Comparator;
import java.util.List;

public class AccountService {
    //private final AccountDao accountDao;
    public AcciybtServuce(AccountDao accountDao){
        this.accountDao=accountDao;
    }

    public Account findRichestAccount(){
        List<Account> accounts=accountDao.findAll();
        return accounts.stream()
            .max(Comparator.comparing((Account::getBalance))
            .get();
    }
}

/**
 * Defines an API for {@link Account} data access object (DAO).
 * 
*/
// public interface AccountDao {
//     List<Account> findAll();
// }

/**
 * <p>
 * todo: 1. Configure rest controller that handles requests with url "/accounts"
 * todo: 2. Inject {@link AccountDao} implementation
 * todo: 3. Implement method that handles GET request and returns a list of accounts
 * todo: 4. Implement method that handles GET request with id as path variable and returns account by id
 * todo: 5. Implement method that handles POST request, receives account as request body, saves account and returns it
 * todo:    Configure HTTP response status code 201 - CREATED
 * todo: 6. Implement method that handles PUT request with id as path variable and receives account as request body.
 * todo:    It check if account id and path variable are the same and throws {@link IllegalStateException} otherwise.
 * todo:    Then it saves received account. Configure HTTP response status code 204 - NO CONTENT
 * todo: 7. Implement method that handles DELETE request with id as path variable removes an account by id
 * todo:    Configure HTTP response status code 204 - NO CONTENT
 */
public class AccountRestController {
//1. configure rest controller that handles requests with url "/accounts"

//2. Inject {@link AccountDao} implementation

//3. Implement method ; GET reuqest --- returns a lists of accounts

//4. Implement method handles GET request with id ----returns account by id

//5. POST request, receives account as request body, saves account and return the new account 

//6. PUT request with id and return the updated accounts 

//7.DELETE reuqest with id and removes an account by id
}


/**
 * REST API end points
 * `GET/api/accounts`: retrievese a list of all accounts
 * `GET/api/accounts/{id}`:retrieves a single account by its id
 * `POST/api/accounts`:creates a new account
 * `PUT/api/accounts/{id}`: updates an existing account
 * `DELETE/api/accounts/{id}`: deletes an existing account
 * 
*/


@RestController
@RequestMapping("/api/accounts")
@Slf4j
public class AccountController{
    private final AccountService accountService;
    public AccountController(AccountService accountService){
        this.accountService=accountService;
    }

    @GetMapping
    public ResponseEntity<List<Account>> getAllAccounts(){
        log.debug("Received retuest to get all accounts");
        List<Account> accounts=accountService.getAllAccounts();
        return ResponseEntity.ok(accounts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable Long id){
        log.debug("Received request to get account with id :{",id);
        Account account = accountService.getAccountById(id);
        return ResponseEntity.ok(account);
    }

    @PostMapping
    pbulic ResponseEntity<Account> createAccount(@RequestBody Account account){
        log.debug("Received request to create account:{}",account);
        Account createdAccount=accountService.createAccount(account);
            return ResponseEntity.ok(createdAccount);

    }

    @Putmapping("/{id}")
    public ResponseEntity<Account> updateAccount(){

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(){
        
    }

}