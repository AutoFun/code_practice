import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadPoolExecutor;

/*
 * Java Basic
 * designPattern: singleton 
 *
 * 
 * 
*/

// public class Singleton{
//     public static void main(String args[]){
//         Singleton.statics.Singleton instance = Singleton.getInstance();
//     }

//     // innerclass
//     public static void main(String args[]){
//         Singleton.staticInnerClass.Singleton instance2 = Singleton.staticInnerClass.Singleton.getInstance();
//     }
//     // thread safety
//     public static void main(String args[]){
//         Singleton.threadSafety.Singleton instance3 = Singleton.threadSafety.Singleton.getInstance();
//     }
//     // thread safety volatile
//     public static void main(String args[]){
//         Singleton.threadSafetyVolatile.Singleton instance3 = Singleton.threadSafetyVolatile.Singleton.getInstance();
//     }
// }

public class RunableThread implements Runnable {
    public int count =0;
    // must define a method call run()
    public void run(){
        System.out.println("RunnableThread starting...");
        try {
            while(count<5){
                Thread.sleep(500);
                System.out.println("In Thread, count is"+ count);
                count++;
            }
        } catch (InterruptedException e){
            System.out.println("RunnableThread Interrupted.");
        }
        System.out.println("RunnableThread terminating.");

    }

    public static void main(String[] args){
        RunableThread instance= new RunableThread();
        Thread thread =new Thread(instance);

        while(instance.count!=5){
            try{
                Thread.sleep(250);
            } catch(InterruptedException e){
                e.printStackTrace();// standard error stream
            }

        }
    }
}


public class ExtendThread extends Thread {
    int count =0;
    // override run method
    public void run(){
        try{
            while(count<5){
                Thread.sleep(250);
                System.out.print("In Thread,count is"+count);
                count++;
            }
        } catch(InterruptedException e){
            System.out.println("Thread Interrupted");
        }
        System.out.println("Thread terminating");
    }
}

public class ExtendThreadRun{
    public static void main(String args[]){
        ExtendThread instance= new ExtendThread();
        instance.start();// will call the run method to start the thread

        while(instance.count!=5){
            try{
                Thread.sleep(250);
            } catch(InterruptedException e){
                    e.printStackTrace();
            }

        }
    }
}

// Java Thread POOL
public class ThreadPoolTest {
    public static void main(String[] args) throws Exception {
        Scacnner in=new Scanner(System.in);
        System.out.println("Enter base directory");
        String directory= in.nextLine();
        System.out.print("Enter keyword");
        String keyword= in.nextLine();

        ExecutorService pool=Executors.newCachedThreadPool();

        MatchCounter counter=new MatchCounter(new File(directory),keyword,pool);
        Future<Integer> result=pool.submit(counter);

        try{
            System.out.println(result.get()+"matching files.");
        }
        catch{
            e.printStackTrace();
        }
        catch(InterruptedException e){ 
        }
        pool.shutdown();

        int largestPoolSize=((ThreadPoolExecutor) pool).getLargestPoolSize();
    }
}