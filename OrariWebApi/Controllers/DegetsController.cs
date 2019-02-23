using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OrariWebApi.Models;
using System.Web.Http.Cors;
namespace OrariWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DegetsController : ApiController
    {
        private ORARI_DEMOEntities db = new ORARI_DEMOEntities();

        // GET: api/Degets
        public IQueryable<Deget> GetDegets()
        {
            return db.Degets;
        }

        // GET: api/Degets/5
        [ResponseType(typeof(Deget))]
        public IHttpActionResult GetDeget(int id)
        {
            Deget deget = db.Degets.Find(id);
            if (deget == null)
            {
                return NotFound();
            }

            return Ok(deget);
        }

        // PUT: api/Degets/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDeget(int id, Deget deget)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != deget.Id)
            {
                return BadRequest();
            }

            db.Entry(deget).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DegetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Degets
        [ResponseType(typeof(Deget))]
        public IHttpActionResult PostDeget(Deget deget)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Degets.Add(deget);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = deget.Id }, deget);
        }

        // DELETE: api/Degets/5
        [ResponseType(typeof(Deget))]
        public IHttpActionResult DeleteDeget(int id)
        {
            Deget deget = db.Degets.Find(id);
            if (deget == null)
            {
                return NotFound();
            }

            db.Degets.Remove(deget);
            db.SaveChanges();

            return Ok(deget);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DegetExists(int id)
        {
            return db.Degets.Count(e => e.Id == id) > 0;
        }
    }
}