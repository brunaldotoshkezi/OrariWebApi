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
    public class OrarisController : ApiController
    {
        private ORARI_DEMOEntities db = new ORARI_DEMOEntities();

        // GET: api/Oraris
        public IQueryable<Orari> GetOraris()
        {
            return db.Oraris;
        }

        // GET: api/Oraris/5
        [ResponseType(typeof(Orari))]
        public IHttpActionResult GetOrari(int id)
        {
            Orari orari = db.Oraris.Find(id);
            if (orari == null)
            {
                return NotFound();
            }

            return Ok(orari);
        }

        // PUT: api/Oraris/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOrari(int id, Orari orari)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orari.Id)
            {
                return BadRequest();
            }

            db.Entry(orari).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrariExists(id))
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

        // POST: api/Oraris
        [ResponseType(typeof(Orari))]
        public IHttpActionResult PostOrari(Orari orari)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Oraris.Add(orari);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = orari.Id }, orari);
        }

        // DELETE: api/Oraris/5
        [ResponseType(typeof(Orari))]
        public IHttpActionResult DeleteOrari(int id)
        {
            Orari orari = db.Oraris.Find(id);
            if (orari == null)
            {
                return NotFound();
            }

            db.Oraris.Remove(orari);
            db.SaveChanges();

            return Ok(orari);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrariExists(int id)
        {
            return db.Oraris.Count(e => e.Id == id) > 0;
        }
    }
}