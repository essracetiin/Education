// See https://aka.ms/new-console-template for more information


Basla();

void Basla()
{
    Console.Clear();
    Console.WriteLine("Adınız ne : ");
    string ad = Console.ReadLine();
    Console.WriteLine($"Merhaba {ad} Kaç yaşındasın?");
    int yas = Convert.ToInt32(Console.ReadLine());
    if (yas >= 18)
    {
        Console.WriteLine($"{ad} Kahveye hoş geldin");
    }
    else
    {
        int yil = 18 - yas;
        Console.WriteLine($" {ad} Kahveye girebilmek için {yil} yıl sonra geri gel :)");
    }
    Console.ReadLine();
    Basla();
    
}



