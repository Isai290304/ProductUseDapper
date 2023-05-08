using Microsoft.AspNetCore.Mvc;
using ProductUseDapper.Models;
using ProductUseDapper.Repositories;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductRepo _productRepo;

    public ProductController(IProductRepo productRepo)
    {
        _productRepo = productRepo;
    }

    [HttpGet]
    public IEnumerable<Product_Master> Get()
    {
        return _productRepo.GetAll();
    }

    [HttpGet("{id}")]
    public Product_Master GetById(int id)
    {
        return _productRepo.GetbyID(id);
    }

    [HttpPost]
    public void Post(Product_Master item)
    {
        _productRepo.Add(item);
    }

    [HttpPut("{id}")]
    public void Put(int id, Product_Master item)
    {
        var product = _productRepo.GetbyID(id);

        if (product != null)
        {
            product.Name = item.Name;
            product.Description = item.Description;

            _productRepo.Update(product);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var product = _productRepo.GetbyID(id);

        if (product != null)
        {
            _productRepo.Delete(id);
            return Ok();    
        }
        else
        {
            return NotFound();
        }
    }
}
