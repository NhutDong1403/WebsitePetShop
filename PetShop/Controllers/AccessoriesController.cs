﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetShop.Models;

namespace PetShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessoriesController : ControllerBase
    {
        private readonly MyDataContext _context;

        public AccessoriesController(MyDataContext context)
        {
            _context = context;
        }

        // GET: api/Accessories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Accessory>>> GetAccessories()
        {
            return await _context.Accessories.ToListAsync();
        }

        // GET: api/Accessories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Accessory>> GetAccessory(int id)
        {
            var accessory = await _context.Accessories.FindAsync(id);

            if (accessory == null)
            {
                return NotFound();
            }

            return accessory;
        }

        // PUT: api/Accessories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccessory(int id, Accessory accessory)
        {
            if (id != accessory.Id)
            {
                return BadRequest();
            }

            _context.Entry(accessory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccessoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Accessories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<Accessory>> PostAccessory(Accessory accessory)
        {
            _context.Accessories.Add(accessory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccessory", new { id = accessory.Id }, accessory);
        }

        // DELETE: api/Accessories/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccessory(int id)
        {
            var accessory = await _context.Accessories.FindAsync(id);
            if (accessory == null)
            {
                return NotFound();
            }

            _context.Accessories.Remove(accessory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccessoryExists(int id)
        {
            return _context.Accessories.Any(e => e.Id == id);
        }
    }
}
