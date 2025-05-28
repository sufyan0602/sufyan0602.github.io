using System;

namespace GuessTheNumber
{    public class GuessTheNumber
    {
        public static void Main(string[] args)
        {

            Console.WriteLine("Hello! What is the range you want to Guess a number from ");

            int min = int.Parse(Console.ReadLine());
            int max = int.Parse(Console.ReadLine());

            if (min >= max)
            {
                Console.WriteLine("The minimum number cannot be greater than the maximum number");
                return;
            }

            Random rand = new Random();
            int range = rand.Next(min, max);
            int gueses = 0;
            int attempts = 5;

            Console.WriteLine(range);
            Console.WriteLine($"Guess a number between {min} and {max}");
            Console.WriteLine($"You have {attempts} attempts! ");

            while (gueses != attempts)
            {

                int inputguess = int.Parse(Console.ReadLine());
                gueses++;
                int left = attempts - gueses;

                if (inputguess == range)
                {
                    Console.WriteLine("YES!");
                    return;
                }
                else if (inputguess != range)
                {
                    Console.WriteLine("Not Right");
                    Console.WriteLine($"You have {left} attempts left! ");
                }
            }
        }   
    }
}