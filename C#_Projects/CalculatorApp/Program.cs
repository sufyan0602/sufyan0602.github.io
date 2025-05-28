using System;


namespace Calculator
{

    class Program
    {
        public static void Main(string[] args)
        {

            bool keepRunning = true;

            while (keepRunning)
            {

                Console.WriteLine("What would you like do today choose 1-4 to to an operation of two numbers");
                Console.WriteLine(" ");
                Console.WriteLine("1. Addition");
                Console.WriteLine("2. Subtraction");
                Console.WriteLine("3. Multiplcation");
                Console.WriteLine("4. Division");
                Console.WriteLine(" ");

                int option = Convert.ToInt32(Console.ReadLine());

                switch (option)
                {
                    case 1:
                        Addition();
                        break;

                    case 2:
                        Subtraction();
                        break;
                    case 3:
                        Multiplcation();
                        break;
                    case 4:
                        Division();
                        break;

                    default:
                        Console.WriteLine("IVALID");
                        break;
                }
                
                Console.WriteLine("Would you like to do anything else type in yes or no");
                string? response = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(response) || response.ToLower() != "yes")
                {
                    keepRunning = false;
                    Console.WriteLine("Bye bye!");
                }
            }
        }
        public static void Addition()
        {
            Console.WriteLine("Pick number 2 numbers");
            int num1 = Convert.ToInt32(Console.ReadLine());
            int num2 = Convert.ToInt32(Console.ReadLine());

            int answer = num1 + num2;
            Console.WriteLine($"Your asnwer is {answer} !");
        }
        public static void Subtraction()
        {
            Console.WriteLine("Pick number 2 numbers");
            int num1 = Convert.ToInt32(Console.ReadLine());
            int num2 = Convert.ToInt32(Console.ReadLine());

            int answer = num1 - num2;
            Console.WriteLine($"Your asnwer is {answer} !");
        }
        public static void Multiplcation()
        {
            Console.WriteLine("Pick number 2 numbers");
            int num1 = Convert.ToInt32(Console.ReadLine());
            int num2 = Convert.ToInt32(Console.ReadLine());

            int answer = num1 * num2;
            Console.WriteLine($"Your asnwer is {answer} !");
        }
        public static void Division()
        {
            Console.WriteLine("Pick number 2 numbers");
            double num1 = Convert.ToInt32(Console.ReadLine());
            double num2 = Convert.ToInt32(Console.ReadLine());

            if (num2 == 0)
            {
                Console.WriteLine("CANNOT DIVIDE BY 0");
                return;
            }
            double answer = num1 / num2;
            Console.WriteLine($"Your asnwer is {answer} !");
        }
    }
}