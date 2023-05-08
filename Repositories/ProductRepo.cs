using Dapper;
using ProductUseDapper.Models;
using System.Data;

namespace ProductUseDapper.Repositories
{
    public class ProductRepo : IProductRepo
    {

        private readonly IDbConnection _db;

        public ProductRepo(IDbConnection db)
        {
            _db= db;
        }
        void IProductRepo.Add(Product_Master item)
        {
            var curdate= DateTime.Now;
            var name=item.Name;
            var description=item.Description;
            _db.Execute("Insert into Product_Master (Name,Description,CreatedOn) Values(@Name,@Description,@curdate)",
              new { Name = name, Description = description, CurDate = curdate });        
        }
        void IProductRepo.Delete(int id)
        {
            _db.Query<Product_Master>("Delete  from Product_Master where id=@Id", new { Id = id });
        }
        

        IEnumerable<Product_Master> IProductRepo.GetAll()
        {
            return _db.Query<Product_Master>("Select * from Product_Master");
        }

        Product_Master IProductRepo.GetbyID(int id)
        {
            return _db.QueryFirstOrDefault<Product_Master>("Select * from Product_Master where id=@Id", new { Id = id });
        }

        void IProductRepo.Update(Product_Master item)
        {
            _db.Execute("UPDATE Product_Master SET Name = @Name, Description = @Description WHERE Id = @Id", item);
        }
    }
}
