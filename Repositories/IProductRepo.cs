using ProductUseDapper.Models;

namespace ProductUseDapper.Repositories
{
    public interface IProductRepo
    {
        Product_Master GetbyID(int id);
        IEnumerable<Product_Master> GetAll();
        void Add(Product_Master item);
        void Update(Product_Master item);
        void Delete(int id);
        
    }
}
