using PersonelProje.Data;
using PersonelProje.Models;
using System.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
/*builder.Services.AddScoped<Ulke>();*/ //new lememek i�in bunu ekliyoruz. metod i�inde newleniyo sonra kapan�yor.
builder.Services.AddSingleton<SqlConnection>(); //scopeta s�sl� parantezden ��kt�ktan sonra kapsama alm�yor. bu ise s�rekli �al���yor. bir kere newlendi mi hep haf�zada kal�yor.
builder.Services.AddScoped<PersonelModel>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
