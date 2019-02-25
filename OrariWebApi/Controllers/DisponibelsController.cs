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

namespace OrariWebApi.Controllers
{
    public class DisponibelsController : ApiController
    {
        private ORARI_DEMOEntities db = new ORARI_DEMOEntities();

        // GET: api/Disponibels
        public IQueryable<Disponibel> GetDisponibels()
        {
            return db.Disponibels;
        }

        // GET: api/Disponibels/5
        [ResponseType(typeof(Disponibel))]
        public IHttpActionResult GetDisponibel(int id)
        {
            Disponibel disponibel = db.Disponibels.Find(id);
            if (disponibel == null)
            {
                return NotFound();
            }

            return Ok(disponibel);
        }

        // PUT: api/Disponibels/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDisponibel(int id, Disponibel disponibel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != disponibel.DitaId)
            {
                return BadRequest();
            }

            db.Entry(disponibel).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DisponibelExists(id))
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

        // POST: api/Disponibels
        [ResponseType(typeof(Disponibel))]
        public IHttpActionResult PostDisponibel(Disponibel disponibel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Disponibels.Add(disponibel);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (DisponibelExists(disponibel.DitaId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = disponibel.DitaId }, disponibel);
        }

        // DELETE: api/Disponibels/5
        [ResponseType(typeof(Disponibel))]
        public IHttpActionResult DeleteDisponibel(int id)
        {
            Disponibel disponibel = db.Disponibels.Find(id);
            if (disponibel == null)
            {
                return NotFound();
            }

            db.Disponibels.Remove(disponibel);
            db.SaveChanges();

            return Ok(disponibel);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DisponibelExists(int id)
        {
            return db.Disponibels.Count(e => e.DitaId == id) > 0;
        }
    }
}